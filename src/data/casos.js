export const cases = [
    {
        slug: 'reestructuracion-holding-multinacional',
        title: 'Reestructuración de holding multinacional',
        client: 'Sector energético',
        impact: 'Optimización del 30% en eficiencia operativa y cumplimiento normativo en 3 jurisdicciones.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        metrics: [
            { label: 'Reducción costos', value: '30%' },
            { label: 'Jurisdicciones', value: '03' }
        ],
        category: 'Derecho corporativo',
        challenge: 'Compleja reorganización societaria de un holding con presencia en 5 países bajo normativas diversas.',
        result: 'Optimización del 30% en eficiencia operativa y blindaje legal total frente a riesgos transaccionales.',
        icon: 'business_center'
    },
    {
        slug: 'defensa-litigio-arbitral-infraestructura',
        title: 'Defensa en litigio arbitral de infraestructura',
        client: 'Consorcio constructor',
        impact: 'Ahorro de $15M USD mediante una estrategia de defensa técnica y probatoria excepcional ante tribunal internacional.',
        image: 'https://images.unsplash.com/photo-1690032191301-a8cb02eb4d2a?q=80&w=1032&auto=format&fit=crop',
        metrics: [
            { label: 'Valor protegido', value: '$15M USD' },
            { label: 'Resultado', value: 'Favorable' }
        ],
        category: 'Litigios y arbitraje',
        challenge: 'Defensa en arbitraje internacional por incumplimiento de contrato de infraestructura civil.',
        result: 'Fallo favorable que evitó una indemnización de $15M USD y protegió la reputación de la constructora.',
        icon: 'gavel'
    },
    {
        slug: 'adquisicion-estrategica-sector-retail',
        title: 'Adquisición estratégica en el sector retail',
        client: 'Cadena nacional',
        impact: 'Due diligence integral y negociación exitosa para la expansión nacional más importante de la década del cliente.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
        metrics: [
            { label: 'Puntos venta', value: '+45' },
            { label: 'Tiempo cierre', value: '6 meses' }
        ],
        category: 'Derecho corporativo',
        challenge: 'Due diligence integral y negociación para la expansión nacional de una cadena de retail.',
        result: 'Expansión exitosa con la apertura de 45 nuevos puntos de venta en tiempo récord.',
        icon: 'business_center'
    }
];

export const getCaseBySlug = (slug) => {
    return cases.find(c => c.slug === slug);
};

// Función para simular una petición API
export const fetchCases = async () => {
    // Simulamos un retraso de red
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cases);
        }, 300);
    });
};
