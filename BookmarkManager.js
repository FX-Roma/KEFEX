/**
 * Manager atómico de persistencia para el Tablero y Foro KEFEX (ES6 Vanilla)
 */
export const SAVED_STORAGE_KEY = 'kefexSavedExplorePosts';

export const BookmarkManager = {
    getSavedIds() {
        try {
            const data = localStorage.getItem(SAVED_STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error al leer marcadores de localStorage:', e);
            return [];
        }
    },

    isSaved(postId) {
        const saved = this.getSavedIds();
        return saved.includes(postId);
    },

    toggleSave(postId) {
        const savedSet = new Set(this.getSavedIds());
        let isNowSaved = false;

        if (savedSet.has(postId)) {
            savedSet.delete(postId);
            isNowSaved = false;
        } else {
            savedSet.add(postId);
            isNowSaved = true;
        }

        const updatedArray = Array.from(savedSet);
        localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(updatedArray));

        // Evento sintáctico para sincronización reactiva
        window.dispatchEvent(new CustomEvent('kefex:board-updated', { 
            detail: { postId, isSaved: isNowSaved, total: updatedArray.length } 
        }));

        window.dispatchEvent(new Event('storage'));

        return isNowSaved;
    }
}; 