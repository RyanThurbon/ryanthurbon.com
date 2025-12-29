export class GuestbookError extends Error {
    readonly _tag: string;

    constructor(
        tag: string,
        message: string,
        readonly cause?: unknown,
    ) {
        super(message, { cause });

        this._tag = tag;
        this.name = tag;

        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class UnknownError extends GuestbookError {
    constructor(message = "An unknown error has occurred", cause?: unknown) {
        super("UnknownError", message, cause);
    }
}

export class UnauthorizedError extends GuestbookError {
    constructor(message = "You are not authorized to access this resource") {
        super("UnauthorizedError", message);
    }
}

export class GuestbookSelectError extends GuestbookError {
    constructor(message = "Unable to select guestbook entries", cause?: unknown) {
        super("GuestbookSelectError", message, cause);
    }
}

export class GuestbookInsertError extends GuestbookError {
    constructor(message = "Unable to insert guestbook entry", cause?: unknown) {
        super("GuestbookInsertError", message, cause);
    }
}

export class GuestbookAlreadySignedError extends GuestbookError {
    constructor() {
        super("GuestbookAlreadySignedError", "You have already signed the guestbook");
    }
}
