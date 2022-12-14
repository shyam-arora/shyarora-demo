import vscode from "vscode";
import { infiniteProgress, installExtension, showReloadPrompt } from "./utils";

export async function activate(context: vscode.ExtensionContext) {
    const progress = infiniteProgress("Please wait while setting up...");
    try {
        await installExtension(context.globalStorageUri.path);
        showReloadPrompt("Installation complete, please reload");
    } catch (e) {
        vscode.window.showErrorMessage(`Error occured while installing extension ${e}`);
    } finally {
        progress.finish();
    }
}

// this method is called when your extension is deactivated
export function deactivate() {}
