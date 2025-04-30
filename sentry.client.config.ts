import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://e06356ea9bead1a02abe6961c4f7775e@o4509243503738880.ingest.us.sentry.io/4509243504525312",
    integrations: [
        Sentry.feedbackIntegration({
            // Additional SDK configuration goes in here, for example: 
            colorScheme: "system",
        }),
    ],
});
