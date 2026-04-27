import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Пользовательское соглашение — Массажный салон Свобода',
};

export default function TermsPage() {
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

        <h1 className="text-4xl font-bold mb-8">Пользовательское соглашение</h1>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Принятие условий</h2>
            <p>
              Используя данный сайт, вы соглашаетесь с настоящим Пользовательским соглашением и
              Политикой конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Использование сайта</h2>
            <p>
              Сайт предназначен исключительно для ознакомления с услугами массажного салона
              «Свобода» и записи на процедуры.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Интеллектуальная собственность
            </h2>
            <p>
              Все материалы на сайте защищены авторским правом и принадлежат массажному салону
              «Свобода».
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Ограничение ответственности
            </h2>
            <p>
              Информация на сайте носит ознакомительный характер. Мы не несём ответственности за
              возможный ущерб от использования данной информации.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Изменение условий соглашения
            </h2>
            <p>
              Мы оставляем за собой право вносить изменения в данное соглашение без предварительного
              уведомления.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
