const detailModules = import.meta.glob(
    "./details/*.js",
    {
        eager: true,
        import: "default",
    }
);

export const projectDetails = Object.fromEntries(
    Object.values(detailModules).map((detail) => [
        detail.id,
        detail,
    ])
);