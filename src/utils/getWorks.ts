import fs from 'fs';
import path from 'path';

export interface WorkGroup {
  category: string;
  title: string;
  images: string[];
}

function getAllImages(dirPath: string, arrayOfImages: string[] = []): string[] {
  if (!fs.existsSync(dirPath)) return arrayOfImages;
  
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllImages(fullPath, arrayOfImages);
    } else {
      if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
        // Convert absolute path to relative public path
        const relativePath = fullPath.split(path.sep + 'public')[1];
        if (relativePath) {
          // ensure forward slashes for URLs
          arrayOfImages.push(relativePath.replace(/\\/g, '/'));
        }
      }
    }
  });

  return arrayOfImages;
}

export function getGroupedWorks(): WorkGroup[] {
  const worksDir = path.join(process.cwd(), 'public', 'works');
  
  if (!fs.existsSync(worksDir)) return [];

  const categories = fs.readdirSync(worksDir).filter(file => {
    return fs.statSync(path.join(worksDir, file)).isDirectory();
  });

  const groupedWorks: WorkGroup[] = categories.map(category => {
    const categoryPath = path.join(worksDir, category);
    const images = getAllImages(categoryPath);
    
    // Map categories to titles
    let title = 'Selected Works';
    if (category.toUpperCase() === 'MARKETING') title = 'Creatives & Posters';
    if (category.toUpperCase() === 'PRODUCT') title = 'E-commerce & Product Design';
    if (category.toUpperCase() === 'WEB') title = 'UI & Frontend Work';

    return {
      category: category.toUpperCase(),
      title,
      images
    };
  }).filter(group => group.images.length > 0);

  // Define the preferred order: PRODUCT, MARKETING, WEB
  const order = ['PRODUCT', 'MARKETING', 'WEB'];
  
  groupedWorks.sort((a, b) => {
    const indexA = order.indexOf(a.category);
    const indexB = order.indexOf(b.category);
    
    // If both are in the defined order, sort by their position in the order array
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    // If only one is in the defined order, it comes first
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    // If neither is in the defined order, sort alphabetically
    return a.category.localeCompare(b.category);
  });

  return groupedWorks;
}
