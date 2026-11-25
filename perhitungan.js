let a, b;
a = 10;
b = 10;

function penjumlahan(a, b) {
    return a + b;
}

document.getElementById("demo").addEventListener("click", function() {
    document.getElementById("hasil").textContent = penjumlahan(a, b);
});
