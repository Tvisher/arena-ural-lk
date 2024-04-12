<template>
  <div class="poll-dropzone__container">
    <div
      v-if="hasUploadedImage"
      class="poll-dropzone"
      :class="{ 'no-drop-zone': hasUploadedImage }"
    >
      <div class="dropzone-bg has-image">
        <img :src="filePath" alt="" />
      </div>
      <div class="uploaded_file">
        <div class="file-item">
          <!-- <div class="file-name">{{ fileName }}</div> -->
          <button class="delete-file" @click="handleClickDeleteFile()">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.625 1.875H10.838L10.5333 0.961313C10.4401 0.681239 10.2611 0.437625 10.0217 0.265061C9.78223 0.0924975 9.4945 -0.000245665 9.19934 4.88728e-07H6.80066C6.50546 -0.000195446 6.2177 0.0925603 5.97818 0.265111C5.73867 0.437661 5.55957 0.681246 5.46628 0.961313L5.16194 1.875H2.375C1.59956 1.875 0.96875 2.50581 0.96875 3.28125V4.21875C0.96875 4.74088 1.43878 4.6875 1.94322 4.6875H14.5625C14.8216 4.6875 15.0312 4.47784 15.0312 4.21875V3.28125C15.0312 2.50581 14.4004 1.875 13.625 1.875ZM6.15041 1.875L6.35572 1.25794C6.38684 1.16457 6.44657 1.08337 6.52643 1.02585C6.60629 0.968337 6.70224 0.937425 6.80066 0.9375H9.19934C9.40122 0.9375 9.58022 1.06613 9.64384 1.25794L9.84937 1.875H6.15041ZM2.02081 5.6875L2.76822 14.721C2.83459 15.4502 3.43656 16 4.16853 16H11.8315C12.5635 16 13.1654 15.4502 13.2323 14.7169L13.9793 5.6875H2.02081ZM5.65625 13.6563C5.65625 14.2742 4.71875 14.2767 4.71875 13.6563V7.09375C4.71875 6.47584 5.65625 6.47331 5.65625 7.09375V13.6563ZM8.46875 13.6563C8.46875 14.2742 7.53125 14.2767 7.53125 13.6563V7.09375C7.53125 6.47584 8.46875 6.47331 8.46875 7.09375V13.6563ZM11.2812 13.6563C11.2812 14.2742 10.3438 14.2767 10.3438 13.6563V7.09375C10.3438 6.83466 10.5534 6.625 10.8125 6.625C11.0716 6.625 11.2812 6.83466 11.2812 7.09375V13.6563Z"
                fill="#ef723b"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      v-else
      v-bind="getRootProps()"
      class="dropzone-wrapper"
      :class="{ uploading: loading }"
    >
      <input v-bind="getInputProps()" />
      <div class="poll-dropzone">
        <div class="dropzone-bg" :class="{ uploading: loading }">
          <span class="loader" v-if="loading"></span>
        </div>
        <div class="loading__text" v-if="loading">
          Идёт загрузка изображения
        </div>
        <div v-else>
          <div class="poll-dropzone__text">
            <span style="color: #ef723b">Загрузить</span> или перенести
            выбранное изображение <br />
            PNG, JPG, JPEG, SVG
          </div>
          <div class="poll-dropzone__descr">
            Максималяный размер файла
            <span class="take-note">{{ 5 }} МБ</span>
          </div>
          <div class="poll-dropzone__descr" v-if="uploadError.length">
            <span class="upload_err">{{ uploadError }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDropzone } from "vue3-dropzone";
import axios from "axios";
let loading = ref(false);
const props = defineProps(["imageUrl"]);
const emit = defineEmits(["addImage"]);
const hasUploadedImage = computed(() => {
  return props.imageUrl.length;
});

const uploadError = ref("");

// const fileName = computed(() => {
//   return backgroundUrl.value.name;
// });

const filePath = computed(() => {
  if (hasUploadedImage) {
    return props.imageUrl;
  }
});

const addUserImage = (newImageData) => {
  // backgroundUrl.value = newImageData;
  emit("addImage", newImageData);
};

function handleClickDeleteFile() {
  emit("addImage", "");
  return;
}

function onDrop(acceptFile, errors) {
  if (errors.length > 0) {
    const errCode = errors[0].errors[0].code;
    if (errCode === "file-invalid-type") {
      uploadError.value = "Не верный тип файла";
    }
    if (errCode === "file-too-large") {
      uploadError.value = "Файл слишком большой";
    }
    return;
  }
  uploadError.value = "";
  saveFiles(acceptFile);
}

const saveFiles = (acceptFile) => {
  const formData = new FormData();
  formData.append("file", acceptFile[0]);
  loading.value = true;
  axios({
    method: "post",
    url: "/wp-content/themes/sp-theme-master/ajax/user_avatar.php",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      console.log(response.data.url[0]);
      const newFilePath = response.data.url[0];
      addUserImage(newFilePath);
      loading.value = false;
    })
    .catch((err) => {
      console.error(err);
      const newFileData =
        "https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg";
      setTimeout(() => {
        addUserImage(newFileData);
        loading.value = false;
      }, 2000);
    });
};

const options = {
  multiple: false,
  maxSize: Number(1) * 1000000,
  onDrop,
  accept: [".jpg", ".jpeg", ".png", ".svg"],
};

const { getRootProps, getInputProps, ...rest } = useDropzone(options);
</script>

<style lang="scss">
.upload_err {
  color: red;
}
.dropzone-wrapper.uploading {
  pointer-events: none;
}
.dropzone-wrapper {
  width: 100%;
}

.file-name {
  max-width: 250px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.poll-dropzone {
  padding: 20px;
  min-height: 160px;
  border-radius: 8px;
  border: 1px solid #eaecf0;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.no-drop-zone {
    border: 1px solid rgba(0, 66, 105, 0.28);
  }
}
.poll-dropzone__container {
  border-radius: 4px;
  // padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
}
.dropzone-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='46' height='46' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='3' y='3' width='40' height='40' rx='20' fill='%23F2F4F7'/%3e%3crect x='3' y='3' width='40' height='40' rx='20' stroke='%23F9FAFB' stroke-width='6'/%3e%3cg clip-path='url(%23clip0_346_6337)'%3e%3cpath d='M26.3335 26.3334L23.0002 23M23.0002 23L19.6669 26.3334M23.0002 23V30.5M29.9919 28.325C30.8047 27.8819 31.4467 27.1808 31.8168 26.3322C32.1868 25.4837 32.2637 24.5361 32.0354 23.6389C31.807 22.7418 31.2865 21.9463 30.5558 21.3779C29.8251 20.8095 28.9259 20.5006 28.0002 20.5H26.9502C26.698 19.5244 26.2278 18.6186 25.5752 17.8509C24.9225 17.0831 24.1042 16.4732 23.182 16.0672C22.2597 15.6612 21.2573 15.4695 20.2503 15.5066C19.2433 15.5437 18.2578 15.8086 17.3679 16.2814C16.4779 16.7542 15.7068 17.4226 15.1124 18.2363C14.518 19.0501 14.1158 19.988 13.936 20.9795C13.7563 21.9711 13.8036 22.9905 14.0746 23.9611C14.3455 24.9317 14.8329 25.8282 15.5002 26.5834' stroke='%23475467' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_346_6337'%3e%3crect width='20' height='20' fill='white' transform='translate(13 13)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 40px;
  height: 40px;
  &.uploading {
    background-image: none;
  }

  &.has-image {
    width: 300px;
    height: 200px;
    background-image: none;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.poll-dropzone__text {
  color: rgba(0, 32, 51, 0.6);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  span {
    display: inline;
    cursor: pointer;
    color: #0078d2;
  }
}
.poll-dropzone__descr {
  color: rgba(0, 32, 51, 0.5);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.file-item {
  display: flex;
  align-items: center;
}

.delete-file {
  border: none;
  cursor: pointer;
  padding: 0;
  // margin-left: 10px;
  margin-top: 10px;
  background-color: transparent;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading__text {
  color: rgba(0, 32, 51, 0.6);
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}

.loader {
  width: 48px;
  height: 48px;
  border: 10px solid #fff;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
  box-sizing: border-box;
  flex-shrink: 0;
}
.loader::before {
  content: "";
  position: absolute;
  box-sizing: border-box;
  inset: -10px;
  border-radius: 50%;
  border: 10px solid #ef723b;
  animation: prixClipFix 2s infinite linear;
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
