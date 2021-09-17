export function convertToBase64(base64data, name) {
  const binaryImg = atob(base64data);
  const length = binaryImg.length;
  const arrayBuffer = new ArrayBuffer(length);
  const uintArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < length; i++) {
    uintArray[i] = binaryImg.charCodeAt(i);
  }

  const fileBlob = new Blob([uintArray], { type: "application/pdf" });

  const url = window.URL.createObjectURL(fileBlob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}
