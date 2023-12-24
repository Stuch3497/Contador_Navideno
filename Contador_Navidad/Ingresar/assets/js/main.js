document.addEventListener('DOMContentLoaded', function() {
    // Espera a que el documento se cargue completamente

    // Encuentra el formulario y añade un evento de envío
    var codigoForm = document.getElementById('codigoForm');
    codigoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtiene el valor del campo de entrada
        var codigo = document.getElementById('codigoInput').value;

        // Lista de códigos permitidos
        var codigosPermitidos = [
            'Iñiguez_Vidrio',
            'crew',
            'Family',
            'Familia_Vidrio',
            'Familia_Iñiguez',
            'Ingles',
            'lol',
            'Programadores'
        ];

        // Verifica si el código ingresado está en la lista
        if (codigosPermitidos.includes(codigo)) {
            if (isMobileDevice()) {
                alert('Código válido. Sin embargo, la descarga no está disponible en dispositivos móviles. ¡Chatea más conmigo para obtener más información!');
            } else {
                // Construye la URL de la imagen
                var imageUrl = 'assets/img/Navidad_' + codigo + '.png';

                // Crea un enlace temporal y simula el clic para descargar la imagen
                var link = document.createElement('a');
                link.href = imageUrl;
                link.download = 'Navidad_' + codigo + '.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } else {
            alert('Código no válido. Upsss tal vez introdujiste mal el código o no te hice uno. ¡Chatea más conmigo, jejeje! Saludos.');
        }
    });

    // Función para verificar si el dispositivo es un teléfono móvil
    function isMobileDevice() {
        return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
});