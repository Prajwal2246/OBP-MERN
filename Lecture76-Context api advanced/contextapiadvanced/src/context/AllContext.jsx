import React from "react";
import BProvider from "./BProvider";
import AProvider from "./AProvider";
import ThemeProvider from "./ThemeProvider";
import { AuthProvider } from "./authContext/AuthContext";
import { ProductContextProvider } from "./productContext/ProductContext";

function AllContext({ children }) {
  return (
    <>
      <ProductContextProvider>
        <AuthProvider>
          <BProvider>
            <AProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </AProvider>
          </BProvider>
        </AuthProvider>
      </ProductContextProvider>
    </>
  );
}

export default AllContext;
