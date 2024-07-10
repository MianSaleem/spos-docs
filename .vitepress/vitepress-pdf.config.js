/**
 * @type {import('vitepress-export-pdf').UserConfig}
 */

const routeOrder = ['/index.html', '/installation.html', '/guide.html', '/dev-guide.html', '/features.html'];

const config = {
  outDir: 'public',
  outFile: 'documentation.pdf',
  pdfOptions: {
    scale: 1,
    margin: {
      top: 60,
      left: 20,
      right: 20,
      bottom: 40,
    },
  },
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex(route => route === pageA.path);
    const bIndex = routeOrder.findIndex(route => route === pageB.path);
    return aIndex - bIndex;
  },
};

export default config;
