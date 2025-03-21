const loadImage = function(path) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        
        img.onload = () => {
          resolve(img);
        };
    
        img.onerror = () => {
          reject(new Error(`Failed to load image at ${path}`));
        };
    });
};

export default loadImage;