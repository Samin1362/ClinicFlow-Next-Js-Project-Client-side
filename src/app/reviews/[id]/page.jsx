export default function ReviewDetailsPage({ params }) {
  return (
    <main className="min-h-screen">
      <h1>Review Details Page</h1>
      <p>Single review details - ID: {params.id}</p>
    </main>
  );
}
