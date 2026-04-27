import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Массажный салон Свобода',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-primary text-white dark py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться на главную
        </Link>

        <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты
              персональных данных пользователей сайта массажного салона «Свобода».
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Сбор персональных данных
            </h2>
            <p>
              Мы собираем только те данные, которые вы предоставляете добровольно при записи на
              процедуры: имя, номер телефона и электронную почту.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Использование данных
            </h2>
            <p>
              Ваши данные используются исключительно для связи с вами в рамках записи на процедуры
              и не передаются третьим лицам.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Безопасность</h2>
            <p>
              Мы принимаем все необходимые меры для защиты ваших персональных данных от
              несанкционированного доступа.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Контакты</h2>
            <p>
              По вопросам обработки персональных данных обращайтесь:{' '}
              <a
                href="mailto:info@svoboda-massage.ru"
                className="text-accent-primary hover:underline"
              >
                info@svoboda-massage.ru
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
