import { useTranslation } from 'react-i18next';

const flags = {
    en: {
        label: 'English',
        src: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    },
    hu: {
        label: 'Magyar',
        src: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
    },
};

export default function LangSwitcher() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="myFlag d-flex flex-row gap-2 align-items-center">
            {Object.entries(flags).map(([langCode, { label, src }]) => (
                <button
                    key={langCode}
                    onClick={() => {
                        changeLanguage(langCode)
                    }}
                    className={`btn btn-sm btn-outline-secondary p-1`}
                    style={{ opacity: currentLang === langCode ? 1 : 0.5 }}
                    aria-label={`Switch to ${label}`}
                >
                    <img
                        src={src}
                        alt={label}
                        width="24"
                        height="16"
                        style={{ objectFit: 'cover', borderRadius: '2px' }}
                    />
                </button>
            ))}
        </div>
    );
}
