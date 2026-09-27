async function test() {
    try {
        const res = await fetch('https://venlog.vercel.app/api/get_database', {
            method: 'GET',
            cache: 'no-store'
        });
        console.log('Status:', res.status);
        console.log('Headers:', Object.fromEntries(res.headers.entries()));
        const bodyText = await res.text();
        console.log('Body:', bodyText);
    } catch (err) {
        console.error('Fetch error:', err);
    }
}
test();
