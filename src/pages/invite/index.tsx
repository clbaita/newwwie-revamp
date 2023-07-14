const Invite = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">
        <span className="underline decoration-primary">G</span>et an invite!
      </h1>
      <div className="text-center">
        <p className="py-6 font-bold">
          All we need to get you an invite for the slack channel is for you to
          introduce yourself by popping in your details.
        </p>
        <p className="py-6">
          You should familiarise yourself with our{" "}
          <a
            className="underline"
            href="https://github.com/newwwie/Code-Of-Conduct/blob/master/README.md"
          >
            code of conduct
          </a>{" "}
          before joining to ensure you understand what is expected so that
          everyone feels welcome.
        </p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 mx-auto">
        <div className="card-body bg-base-200">
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company</span>
              </label>
              <input
                type="text"
                placeholder="Company"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Position</span>
              </label>
              <input
                type="text"
                placeholder="Position"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn URL</span>
              </label>
              <input
                type="text"
                placeholder="LinkedIn URL (optional)"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">How did you hear about us?</span>
              </label>
              <input
                type="text"
                placeholder="Existing members, meetups?"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Anything else we should know?
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="(optional)"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Invite
