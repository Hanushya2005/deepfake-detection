document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const detectButton = document.getElementById("detectButton");
  const preview = document.getElementById("preview");
  const resultBox = document.getElementById("result");
  const howItWorks = document.getElementById("howItWorks");

  detectButton.addEventListener("click", () => {
    const file = fileInput.files[0];

    if (!file) {
      resultBox.innerHTML = "<p style='color: red;'>⚠️ Please upload a file first.</p>";
      howItWorks.style.display = "none";
      return;
    }

    // Show preview if image
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.src = e.target.result;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      preview.style.display = "none";
    }

    // Simulate detection result
    resultBox.innerHTML = "✅ Deepfake is NOT detected. This media is genuine.";
    howItWorks.style.display = "block";
  });
});
