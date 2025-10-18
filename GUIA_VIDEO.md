# Guia para Adicionar seus Vídeos do YouTube/Vimeo

## Como adicionar o link do seu vídeo

Você tem 2 vídeos placeholders na landing page:
1. **Hero Section** - Vídeo principal no topo
2. **Seção "Como Funciona"** - Vídeo explicativo

### Passo 1: Obter o link correto do YouTube

Se seu vídeo está no YouTube:
- Link normal: `https://www.youtube.com/watch?v=ABC123`
- **Link para embed**: `https://www.youtube.com/embed/ABC123`

### Passo 2: Editar o arquivo Home.jsx

Abra o arquivo `/app/frontend/src/components/Home.jsx`

**Para o vídeo da Hero Section (linha ~47):**
```jsx
{/* Video Hero */}
<div className="max-w-4xl mx-auto mt-12">
  <VideoPlayer placeholder={true} />
</div>
```

Altere para:
```jsx
{/* Video Hero */}
<div className="max-w-4xl mx-auto mt-12">
  <VideoPlayer 
    placeholder={false} 
    videoUrl="https://www.youtube.com/embed/SEU_ID_DO_VIDEO" 
  />
</div>
```

**Para o vídeo da seção "Como Funciona" (linha ~95):**
```jsx
{/* Video */}
<div>
  <VideoPlayer placeholder={true} />
</div>
```

Altere para:
```jsx
{/* Video */}
<div>
  <VideoPlayer 
    placeholder={false} 
    videoUrl="https://www.youtube.com/embed/SEU_ID_DO_VIDEO" 
  />
</div>
```

### Passo 3: Obter link de vídeo do Vimeo

Se usar Vimeo:
- Link normal: `https://vimeo.com/123456789`
- **Link para embed**: `https://player.vimeo.com/video/123456789`

### Exemplo completo:

```jsx
<VideoPlayer 
  placeholder={false} 
  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" 
/>
```

## Dicas:

✅ Use links de **embed** (não o link normal de visualização)
✅ Para YouTube: `youtube.com/embed/ID`
✅ Para Vimeo: `player.vimeo.com/video/ID`
✅ Mantenha `placeholder={false}` quando adicionar link real
✅ Mantenha `placeholder={true}` para manter o visual de placeholder

---

**Precisa de ajuda?** Entre em contato com o suporte!
