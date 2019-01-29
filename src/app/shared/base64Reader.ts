export const base64Reader = function(id, subject?) {
  const reader = new FileReader();
  // 上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
  const AllowImgFileSize = 2100000;
  const ele: any = document.querySelector('#' + id);

  ele.addEventListener('change', (event: any) => {
    const {files} = event.target;
    let file: File;

    for (let i = files.length - 1; i >= 0; i--) {
      file = files[i];
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        if (AllowImgFileSize as number !== 0 &&
          AllowImgFileSize < (reader.result as any).length) {
          alert( '上传失败，请上传不大于2M的图片！');
          return;
        } else {
          subject.next(reader.result);
        }
      };
    }
  });

};
