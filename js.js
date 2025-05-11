// اسکریپت برای نمایش مودال لاگین
document.addEventListener('DOMContentLoaded', function() {
    // دریافت المان‌های موردنیاز
    const showLoginModalBtn = document.getElementById('showLoginModal');
    const loginModal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');
    const modal = new bootstrap.Modal(loginModal);

    // نمایش مودال با کلیک بر روی دکمه
    showLoginModalBtn.addEventListener('click', function() {
        modal.show();
    });

    // جلوگیری از ارسال فرم و افزودن عملکرد لاگین
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // دریافت مقادیر فرم
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // اعتبارسنجی اولیه
        if (!email || !password) {
            alert('لطفا همه فیلدها را پر کنید');
            return;
        }

        // ارسال اطلاعات لاگین (در حالت واقعی، اینجا درخواست AJAX به سرور ارسال می‌شود)
        console.log('تلاش برای ورود با:', {
            email: email,
            password: password,
            rememberMe: rememberMe
        });

        // شبیه‌سازی لاگین موفق
        alert('ورود با موفقیت انجام شد!');

        // بستن مودال
        modal.hide();

        // پاک کردن فرم
        loginForm.reset();
    });

    // رویدادهای مربوط به کلیک دکمه‌های شبکه‌های اجتماعی
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            // تشخیص نوع شبکه اجتماعی
            let network = '';
            if (this.classList.contains('google')) {
                network = 'گوگل';
            } else if (this.classList.contains('facebook')) {
                network = 'فیسبوک';
            } else if (this.classList.contains('twitter')) {
                network = 'توییتر';
            }

            // شبیه‌سازی ورود با شبکه اجتماعی
            alert(`درحال انتقال به صفحه احراز هویت ${network}...`);
        });
    });

    // اضافه کردن رویداد برای لینک ثبت نام
    const registerLink = document.querySelector('.login-form a[href="#"]:not(:contains("فراموشی"))');
    if (registerLink) {
        registerLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('انتقال به صفحه ثبت نام...');
            // در حالت واقعی، کاربر به صفحه ثبت نام منتقل می‌شود
        });
    }

    // اضافه کردن رویداد برای لینک فراموشی رمز عبور
    const forgotPasswordLink = document.querySelector('.login-form a[href="#"]');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('انتقال به صفحه بازیابی رمز عبور...');
            // در حالت واقعی، کاربر به صفحه بازیابی رمز عبور منتقل می‌شود
        });
    }
});