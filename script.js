document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // یوزرنیم و پسورد پیش‌فرض
    const correctUsername = "aseman";
    const correctPassword = "123123123";

    // بررسی صحت یوزرنیم و پسورد
    if (username === correctUsername && password === correctPassword) {
        // ورود موفقیت‌آمیز، هدایت به صفحه اصلی
        window.location.href = "welcome.html";
    } else {
        // نمایش پیام خطا
        document.getElementById("errorMessage").style.display = "block";
    }
});