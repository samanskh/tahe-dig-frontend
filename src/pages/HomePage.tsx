export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <h1 className="text-display-xl text-text-primary">
        غذای خوب بعدی‌تان را پیدا کنید.
      </h1>
      <p className="text-body-lg text-text-secondary">
        نانوایی‌های محلی، خانوارها و غذاخورها.
      </p>

      <div className="flex gap-3">
        <button className="rounded-md bg-primary px-5 py-3 text-label-md text-on-primary hover:bg-primary-hover active:bg-primary-pressed">
          رزرو کنید
        </button>
        <button className="rounded-md border border-border-input px-5 py-3 text-label-md text-text-primary">
          بیشتر بدانید
        </button>
      </div>

      <div className="rounded-lg border border-border-default bg-surface p-5 shadow-1">
        <p className="text-price-md text-success">۴٬۰۰۰ تومان</p>
      </div>
    </div>
  )
}