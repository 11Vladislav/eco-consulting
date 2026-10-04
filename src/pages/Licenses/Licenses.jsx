import { useState, useEffect } from 'react';
import license1 from '../../img/license-1.jpg';
import license2 from '../../img/license-2.jpg';
import { Wrap, Thumb, Overlay, FullImg, CloseBtn, Title } from './Licenses.styled';
import { Footer } from 'components/Footer/Footer';

const licenses = [
    { src: license1, alt: 'Ліцензія 1' },
    { src: license2, alt: 'Ліцензія 2' },
];

export const Licenses = () => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (!selected) return;

        const onKey = (e) => {
            if (e.key === 'Escape') setSelected(null);
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';   // блокируем прокрутку страницы под окном

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [selected]);

    return (
        <>
      
            <Wrap>
                  <Title>Наші дозвільні документи</Title>
                {licenses.map(({ src, alt }) => (
                    <Thumb
                        key={alt}
                        src={src}
                        alt={alt}
                        onClick={() => setSelected({ src, alt })}
                    />
                ))}
            </Wrap>

            {selected && (
                <Overlay onClick={() => setSelected(null)}>
                    <CloseBtn onClick={() => setSelected(null)} aria-label="Закрити">
                        &times;
                    </CloseBtn>
                    <FullImg
                        src={selected.src}
                        alt={selected.alt}
                        onClick={(e) => e.stopPropagation()}   /* клик по картинке не закрывает окно */
                    />
                </Overlay>
            )}

            <Footer />
        </>
    );
};