document.getElementById('animalSelect').addEventListener('change', function() {
    var selectedAnimal = this.value;
    var animalImage = document.getElementById('animalImage');
    switch(selectedAnimal) {
        case 'dog':
            animalImage.src = 'https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg';
            animalImage.alt = 'Dog';
            break;
        case 'cat':
            animalImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzX7WNtI1P5kCDNBEAYjBQHyVsLQJoRF1q3g&s';
            animalImage.alt = 'Cat';
            break;
        case 'elephant':
            animalImage.src = 'https://img.freepik.com/premium-photo/animal-highquality-image-dog-tiger-lion-elephant-bird-horse-cat-forest-cow_955048-849.jpg';
            animalImage.alt = 'Elephant';
            break;
        case 'lion':
            animalImage.src = 'https://qph.cf2.quoracdn.net/main-qimg-6f220abc680facb35e78d22927061671';
            animalImage.alt = 'Lion';
            break;
        default:
            animalImage.src = 'dog.jpg';
            animalImage.alt = 'Dog';
    }
});