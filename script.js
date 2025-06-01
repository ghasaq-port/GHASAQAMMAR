document.addEventListener("DOMContentLoaded", function() {
    const projectContainer = document.querySelector(".project-container");
    let position = 0;
    const speed = 1.5; // تقليل سرعة الحركة
    const maxOffset = projectContainer.scrollWidth - projectContainer.clientWidth - 50; 

    function moveProjects() {
        position -= speed;
        projectContainer.style.transform = `translateX(${position}px)`;

        if (Math.abs(position) >= maxOffset) {
            setTimeout(() => {
                position = 0; // إعادة الصور للبداية بسلاسة
                projectContainer.style.transition = "none"; // إزالة تأثير الانتقال مؤقتًا
                projectContainer.style.transform = `translateX(${position}px)`;
                setTimeout(() => {
                    projectContainer.style.transition = "transform 8s linear"; // استعادة الحركة تدريجيًا
                }, 100);
            }, 50);
        }
    }

    setInterval(moveProjects, 50); // تشغيل الحركة بشكل متوازن
});