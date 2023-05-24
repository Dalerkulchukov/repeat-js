    

fetch("data.json")
    .then(response => response.json())
    .then(data => {
    const iphoneContainers = document.querySelector(".iphone-containers")

    data.forEach(iphone => {
        const iphoneCard = document.createElement("div");
        iphoneCard.className = "iphone";

        const image = document.createElement("img");
        image.src = iphone.image;
        iphoneCard.appendChild(image);

        const price = document.createElement("div");
        price.textContent = "Цена: " + iphone.price;
        iphoneCard.appendChild(price);

        const description = document.createElement("div");
        description.textContent = iphone.description;
        iphoneCard.appendChild(description);

        iphoneContainers.appendChild(iphoneCard);
        });
    });
    
    
