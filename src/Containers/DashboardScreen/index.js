
function DashboardScreen({ setShowDashboard }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <p style={{ fontSize: 20, fontWeight: 'bold' }}>
        Dashboard under progress ...
      </p>
      <button
        className="login-button"
        onClick={() => setShowDashboard(false)}
      >
        GO BACK
      </button>
    </div>
  );
}

export default DashboardScreen;
