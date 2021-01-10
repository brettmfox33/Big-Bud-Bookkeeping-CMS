module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: 'bbb-strapi',
            publicFiles: true,
            uniform: false,
            basePath: '',
        },
    }
}