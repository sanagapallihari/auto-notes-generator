function generateNotes() {
    let text = document.getElementById("inputText").value;

    if (!text || text.trim().length < 20) {
        alert("Please enter enough text!");
        return;
    }

    // Summary
    let sentences = text.split(".");
    let summary = sentences.slice(0, 3).join(".") + ".";

    document.getElementById("summary").innerText = summary;

    // Keywords
    let words = text.toLowerCase().match(/\b\w+\b/g);
    let freq = {};

    words.forEach(word => {
        if (word.length > 4) {
            freq[word] = (freq[word] || 0) + 1;
        }
    });

    let sorted = Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(item => item[0]);

    document.getElementById("keywords").innerText = sorted.join(", ");
}
