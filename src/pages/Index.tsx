import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/5457306c-20c3-4da0-9f45-d6831c8f9f08/files/1932f867-21d3-4b0a-907d-03074e3e3e5b.jpg',
      title: 'Джек Рассел в парке',
      description: 'Энергичный щенок на прогулке'
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/5457306c-20c3-4da0-9f45-d6831c8f9f08/files/71ae0e92-8568-4c7d-92e5-b1621c2a02be.jpg',
      title: 'Милый щенок',
      description: 'Портрет очаровательного терьера'
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/5457306c-20c3-4da0-9f45-d6831c8f9f08/files/3f6000b5-6f7c-4fbc-a588-a9f88b282625.jpg',
      title: 'Игра с мячом',
      description: 'Активный день на природе'
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/projects/5457306c-20c3-4da0-9f45-d6831c8f9f08/files/1932f867-21d3-4b0a-907d-03074e3e3e5b.jpg',
      title: 'Солнечный день',
      description: 'Радостный пёс на свежем воздухе'
    },
    {
      id: 5,
      url: 'https://cdn.poehali.dev/projects/5457306c-20c3-4da0-9f45-d6831c8f9f08/files/71ae0e92-8568-4c7d-92e5-b1621c2a02be.jpg',
      title: 'Взгляд щенка',
      description: 'Невероятно милые глаза'
    },
    {
      id: 6,
      url: 'https://cdn.poehali.dev/projects/5457306c-20c3-4da0-9f45-d6831c8f9f08/files/3f6000b5-6f7c-4fbc-a588-a9f88b282625.jpg',
      title: 'Игривый момент',
      description: 'Веселье на лужайке'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <Icon name="Dog" size={48} className="text-primary" />
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-foreground mb-4 tracking-tight">
            JACK RUSSELL
            <span className="block text-primary">GALLERY</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Коллекция фотографий энергичных и очаровательных джек рассел терьеров
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in border-0"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Icon name="ZoomIn" size={20} />
                    <span className="text-sm">Нажмите для увеличения</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
            <Icon name="Heart" size={24} className="mr-2" />
            Любите джек расселов? Мы тоже!
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/90 p-2 hover:bg-white transition-colors">
            <Icon name="X" size={24} />
          </DialogClose>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Увеличенное фото"
              className="w-full h-auto rounded-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
