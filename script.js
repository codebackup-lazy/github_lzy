document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const currentDate = new Date().toLocaleDateString('zh-CN');
    
    contentDiv.innerHTML = `<p>今天日期是: ${currentDate}</p>`;
    contentDiv.style.textAlign = 'center';
    contentDiv.style.marginTop = '20px';
    contentDiv.style.color = '#666';
});
