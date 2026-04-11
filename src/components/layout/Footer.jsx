function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Nagarampalem Police Children Welfare Society. All rights reserved.</p>
        <p style={{ marginTop: '0.25rem' }}>
          Built by <a href="https://akshadigital.com" target="_blank" rel="noopener noreferrer">Aksha Digital Foundation</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
