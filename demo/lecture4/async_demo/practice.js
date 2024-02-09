document.getElementById('nameForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
  
    // Constructing API URLs
    //age-
    const agifyUrl = `https://api.agify.io?name=${name}`;
    //gender-
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    //nationality-
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;

    // Students will write async code here to fetch data from the APIs
    // and update the DOM with the results.
    
    // They should use Promise.all to handle the multiple fetch requests.
    
    // Error handling should also be implemented.

    const ageAnalysis = async () => {
        let age = await fetch(agifyUrl);

        if (!age.ok) {
            console.error("There was a problem calling the age api!!!");
        }
        return age.json();
    };

    const genderAnalysis = async () => {
        let gender = await fetch(genderizeUrl);

        if (!gender.ok) {
            console.error("There was a problem calling the genderize api!!!");
        }
        return gender.json();
    };

    const nationalityAnalysis = async () => {
        let nationality = await fetch(nationalizeUrl);

        if (!nationality.ok) {
            console.error("There was a problem calling the nationalize api!!!");
        }
        return nationality.json();
    };

    const results = document.getElementById("results");
    const country = new Intl.DisplayNames(['en'], { type: 'region' });

    try {
        const info = [];
        let output = [];
        info.push(ageAnalysis().then((age) => {
            output[0] = `<p>${name.charAt(0).toUpperCase() + name.slice(1)}\'s age is: ${age.age}`;
        }));
        info.push(genderAnalysis().then((gender) => {
            output[1] = `<p>${name.charAt(0).toUpperCase() + name.slice(1)}\'s gender is: ${gender.gender.charAt(0).toUpperCase() + gender.gender.slice(1)}`;
        }));
        info.push(nationalityAnalysis().then((nationality) => {
            output[2] = `<p>${name.charAt(0).toUpperCase() + name.slice(1)}\'s nationality is: ${country.of(nationality.country[0].country_id)}`;
        }));

        Promise.all(info)
        .then((list) => {
            results.innerHTML = output[0] + output[1] + output[2];
        });
    } catch (error) {
        console.error("There was an error" + error);
        results.innerHTML = "Failed to fetch name analysis";
    }

});
  
    //solution-
    // try {
    //   // Fetching data from all three APIs simultaneously
    //   const responses = await Promise.all([
    //     fetch(agifyUrl),
    //     fetch(genderizeUrl),
    //     fetch(nationalizeUrl)
    //   ]);
  
    //   // Parsing JSON responses
    //   const results = await Promise.all(responses.map(response => {
    //     if (!response.ok) {
    //       throw new Error(`Error with the request! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   }));
  
    //   // Updating the DOM with the fetched data
    //   document.getElementById('ageResult').textContent = `Predicted Age: ${results[0].age}`;
    //   document.getElementById('genderResult').textContent = `Predicted Gender: ${results[1].gender}`;
    //   document.getElementById('nationalityResult').textContent = `Top Predicted Nationality: ${results[2].country[0]?.country_id || 'Unknown'}`;
    // } catch (error) {
    //   console.error("There was a problem fetching the data:", error);
    //   // Update the DOM to show the error message
    //   document.getElementById('ageResult').textContent = 'Error fetching data';
    //   document.getElementById('genderResult').textContent = 'Error fetching data';
    //   document.getElementById('nationalityResult').textContent = 'Error fetching data';
    // }
  //});
  
