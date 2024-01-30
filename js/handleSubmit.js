document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fileInput = document.getElementById('fileUpload');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const fileContent = event.target.result;
    parseHTMLFile(fileContent);
  };
  reader.readAsText(file);
});