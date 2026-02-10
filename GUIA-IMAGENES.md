# TRAMA SUR - Guía para Agregar Imágenes

## 📸 Secciones Visuales Disponibles

Este sitio web incluye **tres secciones principales** para contenido visual:

### 1. 🧵 **Sección Fundadoras** (`#creators`)
Espacio dedicado a presentar a las **tres fundadoras** de Trama Sur.

**Imágenes necesarias:**
- `fundadora-1.jpg` - Foto de la primera fundadora (tamaño recomendado: 800x1000px)
- `fundadora-2.jpg` - Foto de la segunda fundadora (tamaño recomendado: 800x1000px)
- `fundadora-3.jpg` - Foto de la tercera fundadora (tamaño recomendado: 800x1000px)

**Información a personalizar para cada fundadora:**
- Nombre completo
- Rol en el proyecto (ej: Fundadora / Tejedora / Conductora)
- Biografía breve (2-3 líneas sobre su trayectoria y conexión con el textil)
- Enlaces a redes sociales personales o del proyecto

**Ejemplo de roles sugeridos:**
- Fundadora / Tejedora / Conductora del Podcast
- Co-fundadora / Productora / Gestora Cultural
- Co-fundadora / Investigadora / Artista Textil

---

### 2. 🎨 **Galería Visual** (`#gallery`)
Muestra fotografías del proceso textil, territorios, encuentros y más.

**Imágenes necesarias:**
- `gallery-1.jpg` - Imagen destacada grande (1200x800px)
- `gallery-2.jpg` - (600x600px)
- `gallery-3.jpg` - (600x600px)
- `gallery-4.jpg` - Imagen panorámica (1200x600px)
- `gallery-5.jpg` - (600x600px)
- `gallery-6.jpg` - (600x600px)

**Tipos de contenido sugerido:**
- Tejidos tradicionales
- Paisajes del sur de Chile
- Proceso de hilado/tejido
- Encuentros comunitarios
- Detalles de textiles
- Lanas nativas y materiales

---

### 3. 🖼️ **Afiches y Gráfica** (`#posters`)
Diseños visuales de episodios del podcast y eventos.

**Imágenes necesarias:**
- `poster-1.jpg` - Afiche episodio 1 (tamaño: 900x1200px - formato vertical)
- `poster-2.jpg` - Afiche episodio 2
- `poster-3.jpg` - Afiche episodio 3
- `poster-event.jpg` - Afiche de evento

**Características:**
- Proporción recomendada: 3:4 (vertical)
- Los afiches se pueden ver en tamaño completo haciendo clic
- Incluye título y descripción

---

## 🔧 Cómo Agregar las Imágenes

### Opción 1: Archivos locales (más simple)

1. **Guarda todas tus imágenes** en la misma carpeta que `index.html`

2. **Renombra tus archivos** según los nombres indicados arriba:
   - `fundadora-1.jpg`
   - `fundadora-2.jpg`
   - `fundadora-3.jpg`
   - `gallery-1.jpg`
   - `poster-1.jpg`
   - etc.

3. **Las imágenes aparecerán automáticamente** al abrir `index.html`

### Opción 2: URL externas

Si tus imágenes están en internet (Google Drive, Dropbox, servidor web):

1. Abre `index.html` en un editor de texto
2. Busca las secciones correspondientes
3. Reemplaza los nombres de archivo por URLs completas:

```html
<!-- ANTES -->
<img src="creator-1.jpg" alt="...">

<!-- DESPUÉS -->
<img src="https://tu-servidor.com/imagenes/creadora-principal.jpg" alt="...">
```

---

## 📐 Tamaños Recomendados

| Sección | Tamaño Óptimo | Proporción |
|---------|---------------|------------|
| **Fundadoras (3)** | 800x1000px | 4:5 (vertical) |
| **Galería - Grande** | 1200x800px | 3:2 (horizontal) |
| **Galería - Cuadrada** | 600x600px | 1:1 |
| **Galería - Ancha** | 1200x600px | 2:1 (panorámica) |
| **Afiches** | 900x1200px | 3:4 (vertical) |

---

## 🎨 Consejos para Mejores Resultados

### Calidad de Imagen
- **Formato:** JPG para fotos, PNG para gráficas con transparencia
- **Resolución:** Mínimo 72dpi, ideal 150dpi
- **Peso:** Optimiza las imágenes para web (máx. 500KB por imagen)

### Composición
- **Fundadoras:** Fotos verticales, fondo neutro o de contexto textil. Idealmente con buena iluminación natural que refleje la calidez del proyecto.
- **Galería:** Mezcla de primeros planos y planos generales
- **Afiches:** Diseño vertical, texto legible, paleta coherente con la marca

### Paleta de Colores
Usa los colores del sitio para coherencia visual:
- Rojo copihue: #C84843
- Verde bosque: #2F5233
- Azul lago: #4A7C8E
- Café tierra: #6B4423
- Ocre: #D4A574

---

## ➕ Agregar Más Imágenes

### Para agregar colaboradoras adicionales (más allá de las 3 fundadoras):

En `index.html`, duplica este bloque dentro de `.creators-grid`:

```html
<article class="creator-card">
    <div class="creator-image-wrapper">
        <img src="TU-IMAGEN.jpg" alt="Nombre" class="creator-image">
        <div class="creator-overlay"></div>
    </div>
    <div class="creator-info">
        <h3 class="creator-name">Nombre Completo</h3>
        <p class="creator-role">Colaboradora / Rol específico</p>
        <p class="creator-bio">Biografía breve...</p>
        <div class="creator-social">
            <a href="#" target="_blank" rel="noopener" aria-label="Instagram">📷</a>
            <a href="#" target="_blank" rel="noopener" aria-label="Sitio web">🌐</a>
        </div>
    </div>
</article>
```

### Para agregar más imágenes a la galería:

```html
<div class="gallery-item">
    <img src="TU-IMAGEN.jpg" alt="Descripción">
    <div class="gallery-overlay">
        <span class="gallery-caption">Tu descripción</span>
    </div>
</div>
```

### Para agregar más afiches:

```html
<article class="poster-card">
    <div class="poster-image-wrapper">
        <img src="TU-AFICHE.jpg" alt="Título" class="poster-image">
        <div class="poster-overlay">
            <button class="btn-view-poster">Ver completo</button>
        </div>
    </div>
    <div class="poster-info">
        <h4>Título del afiche</h4>
        <p>Descripción breve</p>
    </div>
</article>
```

---

## ✨ Funcionalidades Incluidas

- ✅ **Lightbox/Modal:** Click en cualquier imagen para verla en grande
- ✅ **Responsive:** Las imágenes se adaptan a móviles y tablets
- ✅ **Lazy Loading:** Las imágenes cargan cuando son necesarias
- ✅ **Hover Effects:** Efectos visuales al pasar el mouse
- ✅ **Accesibilidad:** Navegación con teclado incluida
- ✅ **Animaciones:** Aparición suave al hacer scroll

---

## 🆘 Solución de Problemas

**Las imágenes no aparecen:**
- Verifica que los nombres de archivo coincidan exactamente (incluyendo mayúsculas/minúsculas)
- Asegúrate de que las imágenes estén en la misma carpeta que `index.html`
- Revisa la consola del navegador (F12) para ver errores

**Las imágenes se ven distorsionadas:**
- Usa las proporciones recomendadas
- El CSS aplicará `object-fit: cover` para evitar distorsión

**Quiero cambiar los tamaños:**
- Edita `styles.css` y busca las clases correspondientes
- Modifica las propiedades `height`, `width` o `aspect-ratio`

---

## 📞 Soporte

Si necesitas ayuda personalizando las secciones visuales, revisa el código HTML y CSS - están bien comentados para facilitar la edición.

¡Éxito tejiendo tu sitio! 🧵✨