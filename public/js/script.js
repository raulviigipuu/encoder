// =========================
// DOM References
// =========================
const urlInput = document.getElementById("urlInput");
const urlOutput = document.getElementById("urlOutput");
const encodeUrlBtn = document.getElementById("encodeUrlBtn");
const decodeUrlBtn = document.getElementById("decodeUrlBtn");

const base64Input = document.getElementById("base64Input");
const base64Output = document.getElementById("base64Output");
const encodeBase64Btn = document.getElementById("encodeBase64Btn");
const decodeBase64Btn = document.getElementById("decodeBase64Btn");

const copyButtons = document.querySelectorAll(".copyBtn");

// =========================
// Helper Functions
// =========================
function showCopyFeedback(msgEl, text) {
    msgEl.textContent = text;
    msgEl.classList.add("show");
    setTimeout(() => {
        msgEl.classList.remove("show");
        msgEl.textContent = "";
    }, 1500);
}

// =========================
// Event Listeners
// =========================
encodeUrlBtn.addEventListener("click", () => {
    urlOutput.value = encodeURIComponent(urlInput.value);
});

decodeUrlBtn.addEventListener("click", () => {
    try {
        urlOutput.value = decodeURIComponent(urlInput.value);
    } catch (e) {
        urlOutput.value = "❌ Invalid encoded URL.";
    }
});

encodeBase64Btn.addEventListener("click", () => {
    try {
        base64Output.value = btoa(base64Input.value);
    } catch (e) {
        base64Output.value = "❌ Invalid input for Base64 encoding.";
    }
});

decodeBase64Btn.addEventListener("click", () => {
    try {
        base64Output.value = atob(base64Input.value);
    } catch (e) {
        base64Output.value = "❌ Invalid Base64 string.";
    }
});

copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const target = document.getElementById(targetId);
        const msg = document.getElementById(`copyMessage-${targetId}`);
        if (!target || !msg) return;

        navigator.clipboard.writeText(target.value).then(() => {
            showCopyFeedback(msg, "Copied!");
        }).catch(() => {
            showCopyFeedback(msg, "Copy failed");
        });
    });
});
