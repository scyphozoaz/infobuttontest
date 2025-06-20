// Function to get the query parameter from the URL
        function getQueryParam(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Function to update the content based on the id parameter
        function updateContent() {
            const id = getQueryParam('id');
            const infotext = document.getElementById('infotext');

            // Check if there's an ID and display content accordingly
            if (id) {
                if (id === "pignose") {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Pig-Nosed Turtle <br> Scientific Name: Carettochelys insculpta <br> Type: Reptile <br> Diet: Omnivore (mostly plants) <br> Habitat: Warm, tropical bodies of water';
                } else if (id === "arowana") {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Asian Arowana <br> Scientific Name: Scleropages formosus <br> Type: Fish <br> Diet: Carnivore <br> Habitat: Lowland swamps and rivers';
                } else if (id === 'bullfrog') {
                    infotext.innerHTML = 'Name: African Bullfrog <br> Scientific Name: Pyxicephalus adspersus <br> Type: Amphibian <br> Diet: Invertebrates, lizards, birds, small mammals <br> Habitat: Dry and moist savanna, shrubland';
                    infotext.style.fontSize='175%';
                } else if (id === 'dartfrog') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Dyeing Poison Dart Frog <br> Scientific Name: Dendrobates tinctorius <br> Type: Amphibian <br> Diet: Insectivore <br> Habitat: Tropical forests';
                } else if (id === 'falsegharial') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: False Gharial <br> Scientific Name: Tomistoma schlegelii <br> Type: Reptile <br> Diet: Opportunistic carnivore <br> Habitat: Freshwater with dense vegetation';
                } else if (id ==='galapagos') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Galapagos Tortoise <br> Scientific Name: Chelonoidis niger <br> Type: Reptile <br> Diet: Herbivore <br> Habitat: Grasslands and desert'; 
                } else if (id === 'hognose') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Western Hognose Snake <br> Scientific Name: Heterodon nasicus <br> Type: Reptile <br> Diet: Toads, lizards, reptile eggs <br> Habitat: Flat prairie areas';
                } else if (id === 'iguana') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Green Iguana <br> Scientific Name: Iguana iguana <br> Type: Reptile <br> Diet: Herbivore <br> Habitat: Tropical Forests';
                } else if (id === 'redfoot') {
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: Red-Footed Tortoise <br> Scientific Name: Chelonoidis carbonaria <br> Type: Reptile <br> Diet: Primarily herbivores <br> Habitat: Dry and wet forests, grasslands, savannas';
                } else if (id === 'flamingo') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Flamingo <br> Scientific Name: Phoenicopterus <br> Type: Bird <br> Diet: Algae, brine shrimp <br> Habitat: Lakes, lagoons, wetlands';
                } else if (id === 'shoebill') {
                    infotext.style.fontSize='175%';
                    infotext.style.paddingTop='2vw';
                    infotext.innerHTML = 'Name: Shoebill <br> Scientific Name: Balaeniceps rex <br> Type: Bird <br> Diet: Fish, frogs, reptiles <br> Habitat: Swamps and wetlands in Central Africa';
                } else if (id === 'rhino') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Eastern Black Rhino <br> Scientific Name: Diceros bicornis <br> Type: Mammal <br> Diet: Leaves, twigs, shrubs <br> Habitat: Savannas, grasslands, forests';
                } else if (id === 'giraffe') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Giraffe <br> Scientific Name: Giraffa <br> Type: Mammal <br> Diet: Leaves (especially acacia), shoots <br> Habitat: Savannas and open woodlands';
                } else if (id === 'penguin') {
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: Penguin <br> Scientific Name: Spheniscidae <br> Type: Bird <br> Diet: Fish, squid, krill <br> Habitat: Antarctic and sub-Antarctic regions, coastal areas';
                } else if (id === 'lemur') {
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: Ring-Tailed Lemur <br> Scientific Name: Lemur catta <br> Type: Mammal (primate) <br> Diet: Fruits, leaves, flowers <br> Habitat: Forests and scrublands of Madagascar';
                } else if (id === 'polarbear') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Polar Bear <br> Scientific Name: Ursus maritimus <br> Type: Mammal <br> Diet: Seals, fish <br> Habitat: Arctic sea ice';
                } else if (id === 'colobus') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Colobus Monkey <br> Scientific Name: Colobus <br> Type: Mammal (primate) <br> Diet: Leaves, fruits, flowers <br> Habitat: Forests of Central and East Africa';
                } else if (id === 'spidermonkey') {
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: Black-Handed Spider Monkey <br> Scientific Name: Ateles geoffroyi <br> Type: Mammal (primate) <br> Diet: Leaves, fruits, flowers <br> Habitat: Tropical forests of Central America';
                } else if (id === 'macaque'){
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: Japanese Macaque <br> Scientific Name: Macaca fuscata <br> Type: Mammal (primate) <br> Diet: Fruits, leaves, seeds, insects <br> Habitat: Mountains and forests of Japan (Honshu, Shikoku, Kyushu)';
                } else if (id === 'bison') {
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: American Bison <br> Scientific Name: Bison bison <br> Type: Mammal <br> Diet: Grasses, herbs <br> Habitat: Plains and prairies of North America';
                } else if (id === 'prariedog') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Prairie Dogs <br> Scientific Name: Cynomys <br> Type: Mammal (rodent) <br> Diet: Grasses, seeds, roots <br> Habitat: Grasslands of North America';
                } else if (id === 'vulture') {
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: African White-Backed Vulture <br> Scientific Name: Gyps africanus <br> Type: Bird (raptor) <br> Diet: Carrion <br> Habitat: Savannas and open woodlands of Sub-Saharan Africa';
                } else if (id === 'condor') {
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: Andean Condor <br> Scientific Name: Vultur gryphus <br> Type: Bird (raptor) <br> Diet: Carrion <br> Habitat: Mountains and coastal regions of South America';
                } else if (id === 'eagle') {
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: Steller\'s Sea Eagle <br> Scientific Name: Haliaeetus pelagicus <br> Type: Bird (raptor) <br> Diet: Fish, water birds <br> Habitat: Coasts and islands of eastern <br> Russia and northern Japan';
                } else if (id == 'hawk') {
                    infotext.style.fontSize='175%';
                    infotext.innerHTML = 'Name: Harris Hawk <br> Scientific Name: Parabuteo unicinctus <br> Type: Bird (raptor) <br> Diet: Small mammals, birds, reptiles <br> Habitat: Semiarid deserts of the Americas (mesquite and saguaro)';
                } else if (id === 'tiger') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Sumatran Tiger <br> Scientific Name: Panthera tigris sumatrae <br> Type: Mammal <br> Diet: Deer, wild boar, birds <br> Habitat: Tropical rainforests of Sumatra';
                } else if (id == 'gorilla') {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'Name: Gorilla <br> Scientific Name: Gorilla <br> Type: Mammal (primate) <br> Diet: Fruits, leaves, shoots <br> Habitat: Forests of Central Africa';
                } else {
                    infotext.style.fontSize='200%';
                    infotext.innerHTML = 'id typo'
                }
        }
    }
        // Call the updateContent function when the page loads
        window.onload = updateContent;
