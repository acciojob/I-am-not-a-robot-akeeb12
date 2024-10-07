//your code here
document.addEventListener('DOMContentLoaded', () =>{
	const images = ['img1','img2','img3','img4','img5'];
	let imageContainer = document.getElementById('image-container');
	let resetBtn = document.getElementById('reset');
	let verifyBtn = document.getElementById('verify');
	let para = document.getElementById('para');
	let selectedImages = [];
	let clickedCount = 0;

function renderImages() {
	imageContainer.innerHTML = '';
	const randomIndex = Math.floor(Math.random() * images.length);
	const selectedImagesClass = images[randomIndex];

for(let i = 0; i < 5; i ++){
	const img = document.createElement('img');
	img.className = images[i];
	img.addEventListener('click', handleImageClick);
	imageContainer.appendChild(img);
}

const duplicateImage = document.createElement('img');
duplicateImage.className = selectedImagesClass;
duplicateImage.addEventListener('click', handleImageClick);
imageContainer.appendChild(duplicateImage);

	shuffleImages();
}

function shuffleImages() {
	const imagesArray = Array.from(imageContainer.children);
	for(let i = imagesArray.length - 1; i > 0; i -- ){
		const j = Math.floor(Math.random() * (i + 1));
		imageContainer.appendChild(imagesArray[j]);
	}
}

function handleImageClick(event) {
	const img = event.target;

	if(selectedImages.includes(img.className))
		return;
	img.classList.add('already-selected');
	selectedImages.push(img.className);
	clickedCount++;

	resetBtn.style.display = 'block';

	if(clickedCount === 2){
		verifyBtn.style.display = 'block';
	}
}

resetBtn.addEventListener('click', () =>{
	selectedImage = [];
	clickedCount = 0;
	verifyBtn.style.display = 'none';
	resetBtn.style.display = 'none';
	para.innerHTML = '';
	document.querySelectorAll('.selected').forEach(img => img.classList.remove('selected'));
	renderImages();
});

verifyBtn.addEventListener('click', () =>{
	if(selectedImages[0] === selectedImages[1]){
		para.innerHTML = 'You are a human, Congratulations.!';
	}else{
		para.innerHTML = "We can't verify you as a human. You selected the non identical tiles.!";
	}

	verifyBtn.style.display = 'none';
});

renderImages();

});





