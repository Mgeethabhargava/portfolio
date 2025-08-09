@@ .. @@
             <button onClick={() => scrollToSection('experience')} className="text-white hover:text-blue-400 transition-colors">
               Experience
             </button>
+            <a
+              href="/admin"
+              className="text-white hover:text-green-400 transition-colors"
+            >
+              Admin
+            </a>
             <a
               href={candidate.resume_url}
@@ .. @@
               <button onClick={() => scrollToSection('experience')} className="block text-white hover:text-blue-400 px-3 py-2 w-full text-left">
                 Experience
               </button>
+              <a
+                href="/admin"
+                className="block text-white hover:text-green-400 px-3 py-2"
+              >
+                Admin
+              </a>
               <a
                 href={candidate.resume_url}