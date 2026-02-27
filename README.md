# TRAMA SUR - Sitio Web Multipágina

## 📄 Estructura del Sitio (8 Páginas)

El sitio web de Trama Sur está dividido en **8 páginas HTML independientes** completamente funcionales y responsivas.

---

## 🗂️ Páginas del Sitio

### 1. **index.html** - Inicio
**Propósito:** Página principal de bienvenida

**Contenido:**
- Hero con logo y llamado a acción
- Introducción a Trama Sur
- 3 tarjetas de características (Podcast, Comunidad, Proyectos)
- Último episodio destacado
- Call to Action para unirse

**Enlaces:** A todas las demás páginas

---

### 2. **podcast.html** - Podcast
**Propósito:** Hub central del podcast

**Contenido:**
- Episodio destacado con reproductor de audio
- Lista completa de episodios (numerados)
- Links a plataformas (Spotify, Apple Podcasts, YouTube, Google Podcasts)

**Para personalizar:**
- Agregar archivos de audio reales
- Actualizar títulos y descripciones de episodios
- Modificar URLs de plataformas

---

### 3. **fundadoras.html** - Fundadoras
**Propósito:** Presentar a las 3 fundadoras del proyecto

**Contenido:**
- 3 tarjetas de fundadoras con:
  - Foto (placeholder SVG)
  - Nombre
  - Rol
  - Biografía
  - Links a redes sociales

**Para personalizar:**
- Reemplazar imágenes placeholder con fotos reales (800x1000px)
- Editar nombres, roles y biografías
- Actualizar enlaces de redes sociales

---

### 4. **galeria.html** - Galería
**Propósito:** Mostrar contenido visual del proyecto

**Contenido:**
- Grid de galería con 6 imágenes (diferentes tamaños)
- Sección de afiches con 3 diseños
- Lightbox/modal para ver imágenes completas
- Botón "Ver más"

**Para personalizar:**
- Reemplazar placeholders SVG con fotos reales
- Agregar más imágenes duplicando elementos
- Modificar descripciones (gallery-caption)

**Tamaños recomendados:**
- Grande: 1200x800px
- Cuadrada: 600x600px
- Ancha: 1200x600px
- Afiches: 900x1200px

---

### 5. **trama-sur.html** - Sobre Nosotras
**Propósito:** Explicar la misión, visión y valores

**Contenido:**
- Historia del proyecto
- 3 tarjetas de valores (Misión, Visión, Valores)
- Manifiesto/¿Por qué Trama Sur?

**Para personalizar:**
- Editar textos de historia y manifiesto
- Adaptar misión, visión y valores
- Agregar más contenido según necesidad

---

### 6. **proyectos.html** - Proyectos
**Propósito:** Mostrar iniciativas actuales y futuras

**Contenido:**
- 6 tarjetas de proyectos:
  1. Podcast (activo)
  2. Residencias Textiles (próximamente)
  3. Talleres y Encuentros (próximamente)
  4. Archivo Sonoro (próximamente)
  5. Publicaciones (próximamente)
  6. Mercado Textil (próximamente)

**Para personalizar:**
- Cambiar estados (En curso / Próximamente)
- Agregar más proyectos
- Actualizar descripciones

---

### 7. **comunidad.html** - Comunidad
**Propósito:** Invitar a unirse y apoyar el proyecto

**Contenido:**
- Tarjeta de apoyo en Patreon
- 4 beneficios de membresía
- Links a redes sociales
- Formulario de newsletter

**Para personalizar:**
- Actualizar URL de Patreon real
- Modificar beneficios ofrecidos
- Conectar formulario con servicio de email

---

### 8. **contacto.html** - Contacto
**Propósito:** Facilitar comunicación

**Contenido:**
- Información de contacto
- Ubicación
- Redes sociales
- Formulario de contacto con campos:
  - Nombre
  - Email
  - Asunto (dropdown)
  - Mensaje

**Para personalizar:**
- Conectar formulario con backend/servicio de email
- Actualizar ubicación específica
- Modificar opciones de asunto

---

## 🎨 Archivos Complementarios

### **styles.css**
Contiene todos los estilos para las 8 páginas:
- Variables CSS con paleta de colores
- Estilos compartidos (navegación, footer, botones)
- Estilos específicos de cada página
- Responsive design para móviles y tablets

### **script.js**
Contiene toda la funcionalidad JavaScript:
- Navegación móvil (menú hamburguesa)
- Smooth scroll
- Animaciones al hacer scroll
- Lightbox para galería
- Interacciones de tarjetas de episodios
- Background orgánico SVG

### **logo-trama-sur.png**
Logo del proyecto usado en:
- Navegación
- Hero de homepage
- Footer

---

## 🔗 Navegación Entre Páginas

Todas las páginas están **completamente interconectadas**:

- **Navegación superior:** Enlaces a todas las 8 páginas
- **Footer:** Links duplicados para fácil acceso
- **CTAs internos:** Botones que dirigen a páginas relevantes

---

## 📱 Responsive Design

Todas las páginas son completamente responsivas con 3 breakpoints:

- **Desktop:** > 968px
- **Tablet:** 768px - 968px  
- **Mobile:** < 768px

**Características responsive:**
- Menú hamburguesa en móvil
- Grids que se adaptan a 1 columna
- Imágenes optimizadas
- Botones de ancho completo en móvil

---

## ⚡ Funcionalidades Especiales

### **Galería con Lightbox**
- Click en cualquier imagen para verla completa
- Modal con fondo oscuro
- Botón de cerrar
- Responsive

### **Reproductor de Audio**
- Player HTML5 nativo
- Compatible con todos los navegadores
- Solo requiere agregar el archivo MP3

### **Formularios**
- Validación HTML5
- Estilos personalizados
- Listos para conectar con backend

---

## 🚀 Cómo Usar

### 1. **Abrir el sitio:**
Simplemente abre `index.html` en tu navegador

### 2. **Navegar:**
Usa el menú superior para ir a cualquier página

### 3. **Personalizar contenido:**
- Edita los archivos HTML directamente
- Reemplaza placeholder SVG con imágenes reales
- Actualiza textos y descripciones

### 4. **Agregar contenido:**
- Duplica elementos existentes (ej: agregar más episodios)
- Mantén la estructura HTML
- Los estilos se aplicarán automáticamente

---

## 📂 Estructura de Archivos

```
/trama-sur/
│
├── index.html          # 1. Inicio
├── podcast.html        # 2. Podcast
├── fundadoras.html     # 3. Fundadoras
├── galeria.html        # 4. Galería
├── trama-sur.html      # 5. Sobre nosotras
├── proyectos.html      # 6. Proyectos
├── comunidad.html      # 7. Comunidad
├── contacto.html       # 8. Contacto
│
├── styles.css          # Todos los estilos
├── script.js           # Toda la funcionalidad
│
├── logo-trama-sur.png  # Logo del proyecto
│
└── GUIA-IMAGENES.md    # Guía para agregar imágenes
```

---

## ✅ Checklist de Personalización

### Inmediato:
- [ ] Reemplazar logo con versión final
- [ ] Actualizar email de contacto
- [ ] Verificar URLs de redes sociales
- [ ] Agregar URL real de Patreon

### Contenido:
- [ ] Agregar archivos de audio del podcast
- [ ] Subir fotos de las fundadoras
- [ ] Agregar imágenes a la galería
- [ ] Subir afiches de episodios
- [ ] Actualizar biografías

### Funcionalidad:
- [ ] Conectar formulario de contacto
- [ ] Conectar formulario de newsletter
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar dominio propio

---

## 🎯 Próximos Pasos Recomendados

1. **Hosting:** Subir a un servicio como:
   - Netlify (gratis)
   - Vercel (gratis)
   - GitHub Pages (gratis)

2. **Dominio:** Comprar `tramasur.cl` o similar

3. **Analytics:** Agregar Google Analytics o alternativa

4. **SEO:** Optimizar meta tags y descripciones

5. **Formularios:** Conectar con:
   - Formspree
   - Netlify Forms
   - EmailJS

---

## 💡 Ventajas de la Estructura Multipágina

✅ **SEO mejorado:** Cada página puede rankear independientemente
✅ **Carga más rápida:** Solo se carga el contenido necesario
✅ **Fácil de mantener:** Actualizar una sección no afecta las demás
✅ **Escalable:** Agregar nuevas páginas es simple
✅ **Navegación clara:** URLs descriptivas (tramasur.cl/podcast)

---

## 🆘 Soporte

Si tienes dudas sobre:
- Cómo agregar más contenido
- Cómo modificar estilos
- Cómo personalizar funcionalidades

Revisa los comentarios en el código HTML, CSS y JavaScript - están bien documentados.

---

**¡Tu sitio está listo para crecer! 🧵✨**