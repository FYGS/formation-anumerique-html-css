/**
 * Classe de gestion du formulaire de réservation
 * Implémente la validation et le traitement des données
 */
class ReservationForm {
    constructor() {
        this.form = document.getElementById('reservationForm');
        this.submitButton = document.getElementById('submitButton');
        this.messageContainer = document.getElementById('formMessage');
        this.initialize();
    }

    /**
     * Initialise les écouteurs d'événements et les validations
     * @method initialize
     */
    initialize() {
        // Écouteur pour la soumission du formulaire
        this.form.addEventListener('submit', (e) => {
            console.log('Soumission du formulaire détectée');
            this.handleSubmit(e);
        });
        this.setupDateValidation();
        this.setupInputValidation();
    }

    /**
     * Configure la validation des dates
     * Limite les réservations entre aujourd'hui et 3 mois
     */
    setupDateValidation() {
        const dateInput = document.getElementById('date');
        const today = new Date();
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);

        dateInput.min = today.toISOString().split('T')[0];
        dateInput.max = maxDate.toISOString().split('T')[0];
    }

    /**
     * Met en place la validation en temps réel des champs
     * Vérifie les entrées lors de la perte de focus
     */
    setupInputValidation() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    /**
     * Valide un champ spécifique du formulaire
     * @param {HTMLElement} field - Le champ à valider
     * @returns {boolean} - True si le champ est valide
     */
    validateField(field) {
        const parent = field.parentElement;
        if (field.required && !field.value) {
            this.showError(field, 'Ce champ est requis');
            return false;
        }

        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                this.showError(field, 'Email invalide');
                return false;
            }
        }

        if (field.type === 'tel' && field.value) {
            const phoneRegex = /^(\+33|0)[1-9](\d{8})$/;
            if (!phoneRegex.test(field.value)) {
                this.showError(field, 'Numéro de téléphone invalide');
                return false;
            }
        }

        this.clearFieldError(field);
        return true;
    }

    /**
     * Affiche un message d'erreur pour un champ
     * @param {HTMLElement} field - Le champ concerné
     * @param {string} message - Le message d'erreur
     */
    showError(field, message) {
        const parent = field.parentElement;
        const errorDiv = parent.querySelector('.error-message') ||
            Object.assign(document.createElement('div'), {
                className: 'error-message'
            });
        errorDiv.textContent = message;
        if (!parent.querySelector('.error-message')) {
            parent.appendChild(errorDiv);
        }
        field.classList.add('error');
    }

    /**
     * Efface les messages d'erreur d'un champ
     * @param {HTMLElement} field - Le champ à nettoyer
     */
    clearFieldError(field) {
        const parent = field.parentElement;
        const errorDiv = parent.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        field.classList.remove('error');
    }

    /**
     * Gère la soumission du formulaire de manière asynchrone
     * @param {Event} e - L'événement de soumission
     */
    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) return;

        this.setLoadingState(true);

        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        try {
            console.log({data});
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success simulation
            this.showMessage('Votre demande de réservation a été envoyée avec succès!', 'success');
            this.form.reset();
        } catch (error) {
            this.showMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    /**
     * Valide l'ensemble du formulaire
     * @returns {boolean} - True si le formulaire est valide
     */
    validateForm() {
        let isValid = true;
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        return isValid;
    }

    /**
     * Gère l'état de chargement du formulaire
     * @param {boolean} isLoading - True pendant le chargement
     */
    setLoadingState(isLoading) {
        this.submitButton.disabled = isLoading;
        const spinner = this.submitButton.querySelector('.spinner');
        spinner.classList.toggle('hidden', !isLoading);
    }

    /**
     * Affiche un message de retour à l'utilisateur
     * @param {string} message - Le message à afficher
     * @param {string} type - Le type de message (success/error)
     */
    showMessage(message, type) {
        this.messageContainer.textContent = message;
        this.messageContainer.className = `form-message ${type}`;
        setTimeout(() => {
            this.messageContainer.classList.add('fade-out');
        }, 5000);
    }
}

// Initialisation du gestionnaire de formulaire au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== Initialisation du gestionnaire de formulaire ===');
    new ReservationForm();
});
