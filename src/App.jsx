import { useImageUpload } from "./hooks/useImageUpload.js";

function App() {
  const { imageFiles, previewUrls, handleImageChange, clearImages } = useImageUpload();

  return (
    <div className="container my-4">
      <h2>Ajouter plusieurs photos</h2>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />

      {previewUrls.length > 0 && (
        <div className="mt-3">
          <h4>Aperçu :</h4>
          <div className="d-flex flex-wrap gap-3">
            {previewUrls.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index}`} width="150" />
            ))}
          </div>
          <button onClick={clearImages} className="btn btn-danger mt-3">
            Supprimer toutes les images
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
