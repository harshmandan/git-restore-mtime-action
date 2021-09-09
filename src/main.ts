import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as path from "path";

async function run() {
	const script = path.normalize(path.join(__dirname, "..", "src", "git-restore-mtime"));
	// core.info("running script " + script);
	await exec.exec("python", [script]);
}

run();
