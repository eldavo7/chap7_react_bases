import { useState } from "react";

export function useImageUpload() {
  const [imageFiles, setImageFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  function handleImageChange(e) {
    const newFiles = Array.from(e.target.files);
    if (newFiles.length === 0) return;

    // Ajouter les nouveaux fichiers à ceux déjà sélectionnés
    const updatedFiles = [...imageFiles, ...newFiles];
    const newUrls = newFiles.map(file => URL.createObjectURL(file));
    const updatedUrls = [...previewUrls, ...newUrls];

    setImageFiles(updatedFiles);
    setPreviewUrls(updatedUrls);
  }

  function clearImages() {
    // Nettoyage des URLs créées
    previewUrls.forEach(url => URL.revokeObjectURL(url));
    setImageFiles([]);
    setPreviewUrls([]);
  }

  return { imageFiles, previewUrls, handleImageChange, clearImages };
}
