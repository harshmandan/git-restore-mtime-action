import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as path from "path";

async function run() {
	try {
		core.startGroup("Running mtime restore script");
		const script = path.normalize(path.join(__dirname, "..", "src", "git-restore-mtime"));
		await exec.exec("python", [script]);
		core.endGroup();
	} catch (error: any) {
		core.setFailed(error);
	}
}

run();
