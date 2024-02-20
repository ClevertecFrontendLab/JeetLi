export enum Authorize {
    GOOGLE_AUTH = '/auth/google',
    LOGIN = '/auth/login',
    REGISTRATION = '/auth/registration',
    CHECK_EMAIL = '/auth/check-email',
    CONFIRM_EMAIL = '/auth/confirm-email',
    CHANGE_PASSWORD = '/auth/change-password',
    GOOGLE_CALLBACK = '/auth/google/callback',
}

export enum Url {
    BASE_URL = 'https://marathon-api.clevertec.ru',
}

export enum Feedback {
    GET_FEEDBACK = '/feedback',
    POST_FEEDBACK = '/feedback',
}

export enum Training {
    GET_TRAININGS = '/training',
    POST_TRAINING = '/training',
    PUT_TRAINING = '/training/{id}',
}

export enum FileUpload {
    UPLOAD_IMAGE = '/upload-image',
}

export enum Catalogs {
    TRAINING_LIST = '/catalogs/training-list',
}

export enum Other {
    HEALTH_MONITOR = '/healthmonitor',
}

