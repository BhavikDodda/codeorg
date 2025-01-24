appLastUpdatedData={}
window.data1.forEach(([name, url, lastUpdated]) => {
  const appId = url.split('/').slice(-2, -1)[0];
  appLastUpdatedData[appId] = lastUpdated;
})
/*
const appLastUpdatedData = {
    tq6f6xmxIqovL_yWTDpV0moGNpj5gC1yBz3GI2TfuII: "2024-01-18 14:35:00",
    anotherAppId: "2025-01-17 11:20:00",
};
*/


document.addEventListener('DOMContentLoaded', () => {

    ////

    const divApplab = document.getElementById('divApplab');

    // Create a new element
    const footer = document.createElement('div');

    // Set the text content of the new element
    lastUpdated=appLastUpdatedData[divApplab.getAttribute("data-app-id")]
    footer.textContent = `${document.title} | Created by Bhavik Dodda | Last updated: ${lastUpdated}`;

    // Apply styles to position it at the bottom of the screen
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.backgroundColor = '#f0f0f0'; // Optional: Background color
    footer.style.textAlign = 'center'; // Center-align the text
    footer.style.padding = '10px'; // Optional: Padding for better appearance
    footer.style.fontFamily = 'Arial, sans-serif'; // Optional: Font style
    footer.style.fontSize = '14px'; // Optional: Font size

    // Append the footer element to the parent container
    divApplab.appendChild(footer);
});
