// عالم الشبكات - الملف الرئيسي للجافاسكريبت
// تم التطوير بواسطة مهند مهدي

document.addEventListener('DOMContentLoaded', function() {
    // تبديل قائمة التنقل في الأجهزة المحمولة
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('active') && !event.target.closest('nav') && !event.target.closest('.menu-toggle')) {
            nav.classList.remove('active');
        }
    });
    
    // تفعيل الأكورديون إذا وجد
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            
            header.addEventListener('click', function() {
                item.classList.toggle('active');
                
                // إغلاق العناصر الأخرى
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });
    }
    
    // تفعيل التمرير السلس للروابط الداخلية
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // إغلاق القائمة المحمولة إذا كانت مفتوحة
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // تفعيل الاختبارات التفاعلية
    const quizForms = document.querySelectorAll('.quiz-form');
    
    quizForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // يمكن إضافة منطق التحقق من الإجابات هنا
            // هذا سيتم تنفيذه في كل صفحة على حدة
        });
    });
    
    // تفعيل شريط التقدم للاختبارات متعددة الصفحات
    const progressBar = document.querySelector('.progress-bar');
    const quizQuestions = document.querySelectorAll('.question');
    
    if (progressBar && quizQuestions.length > 0) {
        updateProgressBar(0);
        
        // تحديث شريط التقدم عند الانتقال بين الأسئلة
        function updateProgressBar(currentQuestion) {
            const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
            progressBar.style.width = progress + '%';
        }
        
        // يمكن استدعاء updateProgressBar عند الانتقال بين الأسئلة
    }
    
    // تفعيل التبديل بين علامات التبويب إذا وجدت
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                // إزالة الفئة النشطة من جميع الأزرار والمحتويات
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // إضافة الفئة النشطة للزر والمحتوى المحدد
                button.classList.add('active');
                tabContents[index].classList.add('active');
            });
        });
        
        // تفعيل التبويب الأول افتراضيًا
        if (tabButtons[0] && tabContents[0]) {
            tabButtons[0].classList.add('active');
            tabContents[0].classList.add('active');
        }
    }
    
    // تفعيل التحقق من إجابات الاختبار
    const checkAnswersButtons = document.querySelectorAll('#check-answers');
    
    checkAnswersButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', function() {
                // منطق التحقق من الإجابات موجود في كل صفحة
                // هذا مجرد تأكيد أن المستمع يعمل
                console.log('تم النقر على زر التحقق من الإجابات');
            });
        }
    });
    
    // تفعيل تأثيرات التمرير
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    if (scrollElements.length > 0) {
        // دالة للتحقق مما إذا كان العنصر في منطقة العرض
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // دالة لتفعيل تأثيرات التمرير
        function handleScrollAnimations() {
            scrollElements.forEach(el => {
                if (isElementInViewport(el)) {
                    el.classList.add('animated');
                }
            });
        }
        
        // تفعيل التأثيرات عند التمرير
        window.addEventListener('scroll', handleScrollAnimations);
        
        // تفعيل التأثيرات عند تحميل الصفحة
        handleScrollAnimations();
    }
    
    // تفعيل تكبير الصور
    const zoomableImages = document.querySelectorAll('.zoomable');
    
    if (zoomableImages.length > 0) {
        zoomableImages.forEach(img => {
            img.addEventListener('click', function() {
                this.classList.toggle('zoomed');
            });
        });
    }
    
    // تفعيل الوضع الليلي إذا كان موجودًا
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    if (darkModeToggle) {
        // التحقق من وجود تفضيل محفوظ
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        
        // تطبيق الوضع المحفوظ
        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
        }
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // حفظ التفضيل
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        });
    }
});
